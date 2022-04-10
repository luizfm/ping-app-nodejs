import util from 'util'
import child_process from 'child_process'
import * as readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process';

const exec = util.promisify(child_process.exec)
const rl = readline.createInterface({ input: stdin, output: stdout })

const ip = await rl.question('Inform the host you wants to ping: ')

const ping = async (host) => {
  try {
    const { stdout } = await exec(`ping -c 5 ${host}`);
    console.log(stdout);
  } catch (err) {
    console.log(err.message);
  }
}

ping(ip)

rl.close()