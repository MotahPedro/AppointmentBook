
const express = require('express');

class BaseController {
  static jsonResponse(res, code, message) {
    return res.status(code).json({ message });
  }

  ok(res, dto) {
    if (!!dto) {
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  created(res) {
    return res.sendStatus(201);
  }

  clientError(res, message) {
    return BaseController.jsonResponse(
      res,
      400,
      message ? message : 'Unauthorized',
    );
  }

  unauthorized(res, message) {
    return BaseController.jsonResponse(
      res,
      401,
      message ? message : 'Unauthorized',
    );
  }

  forbidden(res, message) {
    return BaseController.jsonResponse(
      res,
      403,
      message ? message : 'Forbidden',
    );
  }

  notFound(res, message) {
    return BaseController.jsonResponse(
      res,
      404,
      message ? message : 'Not found',
    );
  }

  conflict(res, message) {
    return BaseController.jsonResponse(
      res,
      409,
      message ? message : 'Conflict',
    );
  }

  tooMany(res, message) {
    return BaseController.jsonResponse(
      res,
      429,
      message ? message : 'Too many requests',
    );
  }

  fail(res, error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }

  handleAppError(res, error) {
    if (error.response) {
      return res
        .status(error?.status ? error.status : 500)
        .json({ message: error.response });
    }
    return res.status(500).json({
      message: error?.toString(),
    });
  }
}

module.exports = BaseController;