import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'expose-loader?m!mithril';
import 'expose-loader?dayjs!dayjs';
import 'bootstrap/js/affix';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/modal';
import 'bootstrap/js/transition';
import 'jquery.hotkeys/jquery.hotkeys';

import jqueryTooltipCompatLayer from './jqueryTooltipCompatLayer';

import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

$.fn.tooltip = jqueryTooltipCompatLayer;

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

import patchMithril from './utils/patchMithril';

patchMithril(window);

import * as Extend from './extend/index';

export { Extend };
