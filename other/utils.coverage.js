// npx -p @babel/cli -p @babel/core -c "babel --plugins babel-plugin-istanbul --preset ./.babelrc.js src/shared/utils.js"
var cov_2e1x39rbgn = function () {
  var path = "/Users/kdodds/Developer/jest-cypress-react-babel-webpack/src/utils.js",
      hash = "11d29cc5894ffec96585bad5b940d9b13baa3ea3",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/kdodds/Developer/jest-cypress-react-babel-webpack/src/utils.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 23
        },
        end: {
          line: 5,
          column: 4
        }
      },
      "1": {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 8,
          column: 42
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 66
        }
      },
      "4": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "getFormattedValue",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1,
            column: 54
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 1,
            column: 34
          },
          end: {
            line: 1,
            column: 52
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1,
            column: 45
          },
          end: {
            line: 1,
            column: 52
          }
        }],
        line: 1
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 11,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 47
          },
          end: {
            line: 11,
            column: 55
          }
        }, {
          start: {
            line: 11,
            column: 58
          },
          end: {
            line: 11,
            column: 66
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});
 
  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }
 
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();
 
function getFormattedValue(value) {
  var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_2e1x39rbgn.b[0][0]++, 'en-US');
  cov_2e1x39rbgn.f[0]++;
  var formattedValue = (cov_2e1x39rbgn.s[0]++, parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6
  })); // Add back missing .0 in e.g. 12.0
 
  var match = (cov_2e1x39rbgn.s[1]++, value.match(/\.\d*?(0*)$/));
  cov_2e1x39rbgn.s[2]++;
 
  if (match) {
    cov_2e1x39rbgn.b[1][0]++;
    cov_2e1x39rbgn.s[3]++;
    formattedValue += /[1-9]/.test(match[0]) ? (cov_2e1x39rbgn.b[2][0]++, match[1]) : (cov_2e1x39rbgn.b[2][1]++, match[0]);
  } else {
    cov_2e1x39rbgn.b[1][1]++;
  }
 
  cov_2e1x39rbgn.s[4]++;
  return formattedValue;
}
 
export { getFormattedValue };