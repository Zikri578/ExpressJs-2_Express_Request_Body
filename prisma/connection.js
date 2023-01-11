import { PrismaClient } from "@prisma/client";

// membuat variabel connection untuk menghubungkan ke prisma studio
const connect = new PrismaClient();

// memanggil variabel conn
export default connect;