// import * as config from 'config';
import config = require("config");

export default {
 secret: (config.get('jwt') as any).secret
};
