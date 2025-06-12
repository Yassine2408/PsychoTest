import { neon } from '@neondatabase/serverless';

// Get database URL from environment variables
const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.NETLIFY_DATABASE_URL || '';
};

// Initialize Neon client - only if we have a valid connection string
const databaseUrl = getDatabaseUrl();
export const sql = databaseUrl ? neon(databaseUrl) : null;

// Function to check if database is configured
export function isDatabaseConfigured(): boolean {
  return Boolean(databaseUrl && databaseUrl.startsWith('postgresql://'));
}

// Function to initialize database tables
export async function initializeDatabase() {
  if (!isDatabaseConfigured() || !sql) {
    console.log('Database not configured, skipping initialization');
    return;
  }

  try {
    // Create assessments table
    await sql`
      CREATE TABLE IF NOT EXISTS assessments (
        id SERIAL PRIMARY KEY,
        user_name VARCHAR(255),
        user_age INTEGER,
        user_gender VARCHAR(50),
        user_occupation VARCHAR(255),
        user_location VARCHAR(255),
        score INTEGER NOT NULL,
        level VARCHAR(50) NOT NULL,
        answers JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_assessments_created_at ON assessments(created_at)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_assessments_level ON assessments(level)`;
    
    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Failed to initialize database tables:', error);
    throw error;
  }
}

// Function to save assessment result
export async function saveAssessment(data: {
  userInfo: {
    name?: string;
    age?: number;
    gender?: string;
    occupation?: string;
    location?: string;
  };
  score: number;
  level: string;
  answers: any[];
}) {
  if (!isDatabaseConfigured() || !sql) {
    console.log('Database not configured, skipping save');
    return null;
  }

  try {
    const result = await sql`
      INSERT INTO assessments (
        user_name, user_age, user_gender, user_occupation, user_location,
        score, level, answers
      ) VALUES (
        ${data.userInfo.name || null},
        ${data.userInfo.age || null},
        ${data.userInfo.gender || null},
        ${data.userInfo.occupation || null},
        ${data.userInfo.location || null},
        ${data.score},
        ${data.level},
        ${JSON.stringify(data.answers)}
      )
      RETURNING id, created_at
    `;
    
    return result[0];
  } catch (error) {
    console.error('Failed to save assessment:', error);
    throw error;
  }
}

// Function to get assessment statistics
export async function getAssessmentStats() {
  if (!isDatabaseConfigured() || !sql) {
    console.log('Database not configured, returning mock stats');
    return {
      levelStats: [],
      overall: { total: 0, avg_score: 0, min_score: 0, max_score: 0 }
    };
  }

  try {
    const stats = await sql`
      SELECT 
        COUNT(*) as total_assessments,
        AVG(score) as average_score,
        level,
        COUNT(*) as count
      FROM assessments 
      GROUP BY level
      ORDER BY average_score DESC
    `;
    
    const totalStats = await sql`
      SELECT 
        COUNT(*) as total,
        AVG(score) as avg_score,
        MIN(score) as min_score,
        MAX(score) as max_score
      FROM assessments
    `;
    
    return {
      levelStats: stats,
      overall: totalStats[0]
    };
  } catch (error) {
    console.error('Failed to get assessment stats:', error);
    throw error;
  }
} 