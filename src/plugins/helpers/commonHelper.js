export function getGermanFormatDate(date) {
  let array_from_ISO_date = Intl.DateTimeFormat("en-GB")
    .format(date)
    .split("/");
  return (
    array_from_ISO_date[0] +
    "." +
    array_from_ISO_date[1] +
    "." +
    array_from_ISO_date[2]
  );
}

export function getDateFromGermanDate(dateString) {
  let array_from_german_date = dateString.split(".");
  let date = Number(
    array_from_german_date[1].replace(/\u200E/g, "") - 1
  ).toString();

  let newDate = [
    array_from_german_date[2],
    date,
    array_from_german_date[0]
  ].join("-");

  return new Date(newDate);
}

export function getFirstDayOfMonth() {
  let current_day = new Date();
  return new Array(100)
    .fill(0)
    .map(
      (it, index) =>
        new Date(current_day.getFullYear(), current_day.getMonth() + 1 + index)
    );
}

export function germanFormat(number) {
  number = parseFloat(number);
  let postComma, preComma, stringReverse, _ref;
  stringReverse = function(str) {
    return str
      .split("")
      .reverse()
      .join("");
  };
  (_ref = number.toFixed(2).split(".")),
    (preComma = _ref[0]),
    (postComma = _ref[1]);
  preComma = stringReverse(
    stringReverse(preComma)
      .match(/.{1,3}/g)
      .join(".")
  );
  return "" + preComma + "," + postComma;
}

export function validateEmail(email) {
  let rule = /\S+@\S+.\S+/;
  return rule.test(email);
}
