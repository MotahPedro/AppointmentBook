
class SummaryError {
  config;
  response;
  message;
  status;

  constructor(err) {
    this.config = this.parseConfig(err?.config);
    this.response = this.parseResponse(err?.response);
    this.message = err?.message;
    this.status = err?.status;
  }

  parseConfig(config) {
    if (config) {
      return {
        url: config?.url,
        method: config?.method,
        data: config?.data,
        headers: config?.headers,
      };
    }
    return {};
  }

  parseResponse(response) {
    if (response) {
      return {
        data: response?.data,
        status: response?.status,
        statusText: response?.statusText,
      };
    }
    return {};
  }

  print() {
    console.log(`config: ${JSON.stringify(this.config)}`);
    console.log(`response: ${JSON.stringify(this.response)}`);
    console.log(`message: ${JSON.stringify(this.message)}`);
    console.log(`status: ${JSON.stringify(this.status)}`);
  }
}