import sql from 'mssql'
const dbSettings={
   user: "adminExpress",
    password:"empleoExpress21",
    server:"empleoexpress.database.windows.net",
    database:"empleoExpressDB",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}
export async function getConnection(){
    try {     
    const pool=await sql.connect(dbSettings);
    return pool;   
        

    } catch (error) {
        console.error(error);
    }
}
getConnection();
