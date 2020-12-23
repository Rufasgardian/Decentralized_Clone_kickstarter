'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const web3 = new Web3(window.web3.currentProvider);
var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser && metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider(
    // we are in the server || metamask is not running
    'https://rinkeby.infura.io/v3/3d5e8a9967f747f79070721133a2dfae');

    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBLElBQUksWUFBSjs7QUFFQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUEzRCxhQUF1RSxBQUNuRTtBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUhELE9BR0ssQUFDRDtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixBQUNqQjtBQUNJO0FBRmEsQUFBakIsQUFLQTs7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBRUg7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1ZmF0L0Rlc2t0b3AvTDJfU2VtMi9CbG9ja2NoYWluL2tpY2tzdGFydCJ9