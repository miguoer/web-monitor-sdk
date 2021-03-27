import { D } from "../constants/WindowApi";

export const visibility = {
  isHidden: false,
};

/**
 * From visibilitychange listener it saves only when
 * the page gets hidden, because it's important to not
 * use the wrong "hidden" value when send timing or logging.
 */
export const didVisibilityChange = function (cb: Function | null) {
  if (D.hidden) {
    if (cb) {
      cb();
    }

    visibility.isHidden = D.hidden;
  }
};
