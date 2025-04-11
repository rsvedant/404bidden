import { prisma } from '../lib/db/prisma';

async function testPrismaConnection() {
    try {
        // Test the connection by attempting a simple query
        console.log('🚀 Testing Prisma connection to Neon database...');

        // Get the database version (works with any PostgreSQL database)
        const result = await prisma.$queryRaw`SELECT version();`;
        console.log('✅ Connection successful!');
        console.log('📊 Database info:', result);

        // Count users to test model access
        const userCount = await prisma.user.count();
        console.log(`👤 Number of users in database: ${userCount}`);

        // Count endpoints to test model access
        const endpointCount = await prisma.endpoint.count();
        console.log(`🔗 Number of endpoints in database: ${endpointCount}`);

        // Check check results to test model access
        const checkResultCount = await prisma.checkResult.count();
        console.log(`📝 Number of check results in database: ${checkResultCount}`);

        console.log('✨ All tests passed!');
    } catch (error) {
        console.error('❌ Connection failed:', error);
    } finally {
        // Always disconnect when done
        await prisma.$disconnect();
    }
}

// Run the test
testPrismaConnection();