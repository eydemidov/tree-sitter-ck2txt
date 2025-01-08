module.exports = grammar({
  name: 'ck2txt',

  rules: {
    document: $ => repeat($._line),

    _line: $ => choice($.key_value, $.section, $.comment, $.empty_line),

    section: $ => prec(2, seq($.key, '=', $.block)),

    key_value: $ => seq(
      $.key,
      '=',
      $.value
    ),

    block: $ => seq(
      '{',
      repeat($._line),
      '}'
    ),

    key: $ => /[a-zA-Z0-9_]+/,
    value: $ => /["a-zA-Z0-9._-]+/,

    comment: $ => /#.*/,

    empty_line: $ => /\n/,
  },
});
