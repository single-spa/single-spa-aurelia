import { SingleSpaAureliaOptions } from './types';

export default function singleSpaAurelia(options: SingleSpaAureliaOptions): void {
  options.bootstrap(() => {
    return 10;
  });
}
