'use strict';

const examples = {};
examples['application/json'] = [{
  "id": 0,
  "task": "メールチェック",
  "finish": true
}, {
  "id": 1,
  "task": "ミーティング",
  "finish": false
}];

/**
 * Todoの全件取得
 *
 * filter String todo filter by finished (optional)
 * returns List
 **/
exports.todosGET = function (filter) {
  return new Promise(function (resolve, reject) {

    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Todo1件の削除
 *
 * id BigDecimal
 * no response value expected for this operation
 **/
exports.todosIdDELETE = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Todo1件の取得
 *
 * id BigDecimal
 * returns Todo
 **/
exports.todosIdGET = function (id) {
  return new Promise(function (resolve, reject) {

    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]][id]);
    } else {
      resolve();
    }
  });
}


/**
 * Todo1件の更新
 *
 * id BigDecimal
 * todo Todo  (optional)
 * no response value expected for this operation
 **/
exports.todosIdPUT = function (id, todo) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * 新規Todoの登録
 *
 * todo Todo  (optional)
 * no response value expected for this operation
 **/
exports.todosPOST = function (todo) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

