"use strict";
class Paginated {
    constructor(page, pagesCount, totalCount) {
        this._page = 0;
        this._pagesCount = 0;
        this._totalCount = 0;
        this._page = page;
        this._pagesCount = pagesCount;
        this._totalCount = totalCount;
    }
    range() {
        if (!this._pagesCount) {
            return [];
        }
        var step = 2;
        var doubleStep = step * 2;
        var start = Math.max(0, this._page - step);
        var end = start + 1 + doubleStep;
        if (end > this._pagesCount) {
            end = this._pagesCount;
        }
        var ret = [];
        for (var i = start; i != end; ++i) {
            ret.push(i);
        }
        return ret;
    }
    ;
    pagePlus(count) {
        return +this._page + count;
    }
    search(i) {
        this._page = i;
    }
    ;
}
exports.Paginated = Paginated;
