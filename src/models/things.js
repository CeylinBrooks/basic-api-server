'use strict';

class ThingsModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }

    this.db.push(record);
    return record;
  }

    read(id) {
      if (id) {
        return this.db.find(record => record.id === id);
      }else {
        return this.db;
      }
    }

    update(id, obj) {
      if(id) {
        return null;
      }
    }
  }
  module.exports = ThingsModel;