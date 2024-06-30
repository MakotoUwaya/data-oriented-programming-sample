import lodashBase from "lodash";
import fp from "lodash/fp";

// @ts-expect-error
const _: typeof lodashBase = fp.convert({
  cap: false,
  curry: false,
  fixed: false,
  immutable: true,
  rearg: false,
});

export default _;