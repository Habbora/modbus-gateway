import { modbusRoute } from "./modbus/route";
import { httpServer } from "./server";

const server = httpServer.use(modbusRoute).listen(3000);

console.log("Modbus Gateway is running on port 3000");
