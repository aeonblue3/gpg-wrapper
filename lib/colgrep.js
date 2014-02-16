// Generated by IcedCoffeeScript 1.7.1-a
(function() {
  var colgrep;

  exports.colgrep = colgrep = function(_arg) {
    var buffer, cols, found, indices, k, line, lines, max_index, out, patterns, separator, v, _i, _len;
    patterns = _arg.patterns, buffer = _arg.buffer, separator = _arg.separator;
    separator || (separator = /:/);
    lines = buffer.toString('utf8').split('\n');
    indices = (function() {
      var _results;
      _results = [];
      for (k in patterns) {
        v = patterns[k];
        _results.push(parseInt(k));
      }
      return _results;
    })();
    max_index = Math.max.apply(Math, indices);
    out = [];
    for (_i = 0, _len = lines.length; _i < _len; _i++) {
      line = lines[_i];
      if (!(((cols = line.split(separator)) != null) && (max_index < cols.length))) {
        continue;
      }
      found = true;
      for (k in patterns) {
        v = patterns[k];
        if (!cols[k].match(v)) {
          found = false;
          break;
        }
      }
      if (found) {
        out.push(cols);
      }
    }
    return out;
  };

}).call(this);