"use strict";
const execute_1 = require("./execute");
const parse_cmd_1 = require("./parse-cmd");
const merge = require('lodash.merge');
const defaultOpts = {
    spawnOpts: {},
    crossSpawn: true,
    buffer: false,
    shell: 'bash',
};
exports.cmdSpawn = (cmd, opts) => {
    if (cmd.length < 1) {
        throw new Error('No command to run');
    }
    // Merge with defaults
    const { spawnOpts, crossSpawn, buffer } = merge({}, defaultOpts, opts);
    const cmdParsed = parse_cmd_1.parseCmd({ cmd });
    return execute_1.execute({
        cmd: cmdParsed.cmd,
        cmdArgs: cmdParsed.cmdArgs,
        spawnOpts: Object.assign({}, spawnOpts),
        crossSpawn,
        shouldBuffer: buffer,
    });
};
//# sourceMappingURL=index.js.map