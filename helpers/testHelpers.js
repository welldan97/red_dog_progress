const RealDate = Date;

export function mockDate(...args) {
  let argsToPass = args;
  if (args.length === 0) {
    argsToPass = ['1969-08-18T03:24:00'];
  }
  global.Date = class extends RealDate {
    constructor() {
      super();
      return new RealDate(...argsToPass);
    }
  };
}

mockDate.restore = () => {
  global.Date = RealDate;
};
