import { Resdb } from './lib';


const resDb: Resdb = new Resdb(["http://string"], {})
console.log(resDb.api_version)