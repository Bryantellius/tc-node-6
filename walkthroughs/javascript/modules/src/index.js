console.log("Hello World");

// Default Import from NPM module
import dayjs from "dayjs";
// Default Import from local module
import DOM from "./dom";
// Named Import from local module
import { days, daysInYear } from "./data";

DOM.updateTextById("date", dayjs().format("MMMM DD, YYYY"));
DOM.updateTextById("daysInYear", daysInYear);
