String.prototype.spacify = function spacify() {
    if (!this) {
        return this;
    }

    return this.split("").join(" ").trim(" ");
};
