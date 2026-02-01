import { c as defineEventHandler, u as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const hello = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return {
    message: "Hello from Nuxt 4 Server!",
    // 演示：安全地读取服务端私有密钥
    // 注意：不要直接返回完整的敏感信息，这里仅作为演示
    secretConfigured: !!config.apiSecret,
    secretPreview: config.apiSecret ? `${config.apiSecret.substring(0, 3)}***` : "Not Set"
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
