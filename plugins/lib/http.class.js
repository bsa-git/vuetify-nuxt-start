/**
 * HttpBox - http functions
 *
 *
 * JavaScript
 *
 * @author   Sergii Beskorovainyi <bsa2657@yandex.ru>
 * @license  MIT <http://www.opensource.org/licenses/mit-license.php>
 * @link     https://github.com/bsa-git/vuetify-nuxt-start/
 */
import qs from 'qs'
import useragent from 'express-useragent'

class HttpBox {
    constructor(context) {
        this.context = context;
        this.request = context.req;
        this.response = context.res;
        this.params = context.params;
        this.query = context.query;
        this.redirect = context.redirect;
        this.route = context.route;
        this.error = context.error;
    }

    static httpConst() {
        return {
            HTTP_CONTINUE: 100,
            HTTP_SWITCHING_PROTOCOLS: 101,
            HTTP_PROCESSING: 102,            // RFC2518
            HTTP_OK: 200,
            HTTP_CREATED: 201,
            HTTP_ACCEPTED: 202,
            HTTP_NON_AUTHORITATIVE_INFORMATION: 203,
            HTTP_NO_CONTENT: 204,
            HTTP_RESET_CONTENT: 205,
            HTTP_PARTIAL_CONTENT: 206,
            HTTP_MULTI_STATUS: 207,          // RFC4918
            HTTP_ALREADY_REPORTED: 208,      // RFC5842
            HTTP_IM_USED: 226,               // RFC3229
            HTTP_MULTIPLE_CHOICES: 300,
            HTTP_MOVED_PERMANENTLY: 301,
            HTTP_FOUND: 302,
            HTTP_SEE_OTHER: 303,
            HTTP_NOT_MODIFIED: 304,
            HTTP_USE_PROXY: 305,
            HTTP_RESERVED: 306,
            HTTP_TEMPORARY_REDIRECT: 307,
            HTTP_PERMANENTLY_REDIRECT: 308,  // RFC7238
            HTTP_BAD_REQUEST: 400,
            HTTP_UNAUTHORIZED: 401,
            HTTP_PAYMENT_REQUIRED: 402,
            HTTP_FORBIDDEN: 403,
            HTTP_NOT_FOUND: 404,
            HTTP_METHOD_NOT_ALLOWED: 405,
            HTTP_NOT_ACCEPTABLE: 406,
            HTTP_PROXY_AUTHENTICATION_REQUIRED: 407,
            HTTP_REQUEST_TIMEOUT: 408,
            HTTP_CONFLICT: 409,
            HTTP_GONE: 410,
            HTTP_LENGTH_REQUIRED: 411,
            HTTP_PRECONDITION_FAILED: 412,
            HTTP_REQUEST_ENTITY_TOO_LARGE: 413,
            HTTP_REQUEST_URI_TOO_LONG: 414,
            HTTP_UNSUPPORTED_MEDIA_TYPE: 415,
            HTTP_REQUESTED_RANGE_NOT_SATISFIABLE: 416,
            HTTP_EXPECTATION_FAILED: 417,
            HTTP_I_AM_A_TEAPOT: 418,                                               // RFC2324
            HTTP_UNPROCESSABLE_ENTITY: 422,                                        // RFC4918
            HTTP_LOCKED: 423,                                                      // RFC4918
            HTTP_FAILED_DEPENDENCY: 424,                                           // RFC4918
            HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL: 425,   // RFC2817
            HTTP_UPGRADE_REQUIRED: 426,                                            // RFC2817
            HTTP_PRECONDITION_REQUIRED: 428,                                       // RFC6585
            HTTP_TOO_MANY_REQUESTS: 429,                                           // RFC6585
            HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE: 431,                             // RFC6585
            HTTP_INTERNAL_SERVER_ERROR: 500,
            HTTP_NOT_IMPLEMENTED: 501,
            HTTP_BAD_GATEWAY: 502,
            HTTP_SERVICE_UNAVAILABLE: 503,
            HTTP_GATEWAY_TIMEOUT: 504,
            HTTP_VERSION_NOT_SUPPORTED: 505,
            HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL: 506,                        // RFC2295
            HTTP_INSUFFICIENT_STORAGE: 507,                                        // RFC4918
            HTTP_LOOP_DETECTED: 508,                                               // RFC5842
            HTTP_NOT_EXTENDED: 510,                                                // RFC2774
            HTTP_NETWORK_AUTHENTICATION_REQUIRED: 511
        };
    }

    static httpCodes() {
        return {
            100: 'Continue',
            101: 'Switching Protocols',
            200: 'OK',
            201: 'Created',
            202: 'Accepted',
            203: 'Non-Authoritative Information',
            204: 'No Content',
            205: 'Reset Content',
            206: 'Partial Content',
            300: 'Multiple Choices',
            301: 'Moved Permanently',
            302: 'Found',
            303: 'See Other',
            304: 'Not Modified',
            305: 'Use Proxy',
            306: '(Unused)',
            307: 'Temporary Redirect',
            400: 'Bad Request',
            401: 'Unauthorized',
            402: 'Payment Required',
            403: 'Forbidden',
            404: 'Not Found',
            405: 'Method Not Allowed',
            406: 'Not Acceptable',
            407: 'Proxy Authentication Required',
            408: 'Request Timeout',
            409: 'Conflict',
            410: 'Gone',
            411: 'Length Required',
            412: 'Precondition Failed',
            413: 'Request Entity Too Large',
            414: 'Request-URI Too Long',
            415: 'Unsupported Media Type',
            416: 'Requested Range Not Satisfiable',
            417: 'Expectation Failed',
            500: 'Internal Server Error',
            501: 'Not Implemented',
            502: 'Bad Gateway',
            503: 'Service Unavailable',
            504: 'Gateway Timeout',
            505: 'HTTP Version Not Supported'
        }
    }

    static mimeTypes() {
        return {
            txt: 'text/plain',
            htm: 'text/html',
            html: 'text/html',
            php: 'text/html',
            css: 'text/css',
            js: 'application/javascript',
            json: 'application/json',
            xml: 'application/xml',
            swf: 'application/x-shockwave-flash',
            flv: 'video/x-flv',
            // images
            png: 'image/png',
            jpe: 'image/jpeg',
            jpeg: 'image/jpeg',
            jpg: 'image/jpeg',
            gif: 'image/gif',
            bmp: 'image/bmp',
            ico: 'image/vnd.microsoft.icon',
            tiff: 'image/tiff',
            tif: 'image/tiff',
            svg: 'image/svg+xml',
            svgz: 'image/svg+xml',
            // archives
            zip: 'application/zip',
            rar: 'application/x-rar-compressed',
            exe: 'application/x-msdownload',
            msi: 'application/x-msdownload',
            cab: 'application/vnd.ms-cab-compressed',
            // audio/video
            mp3: 'audio/mpeg',
            qt: 'video/quicktime',
            mov: 'video/quicktime',
            // adobe
            pdf: 'application/pdf',
            psd: 'image/vnd.adobe.photoshop',
            ai: 'application/postscript',
            eps: 'application/postscript',
            ps: 'application/postscript',
            // ms office
            doc: 'application/msword',
            rtf: 'application/rtf',
            xls: 'application/vnd.ms-excel',
            ppt: 'application/vnd.ms-powerpoint',
            // open office
            odt: 'application/vnd.oasis.opendocument.text',
            ods: 'application/vnd.oasis.opendocument.spreadsheet'
        }
    }

    static getHttpCode(code) {
        return HttpBox.httpCodes[code]
    }

    static getMimeType(type) {
        return HttpBox.mimeTypes[type]
    }

    /**
     * Get UserAgent info for client
     * {
          "isMobile":false,
          "isDesktop":true,
          "isBot":false,
          "isIE":false,
          "isChrome":true,
          .....
          "browser":"Chrome",
          "version":"17.0.963.79",
          "os":"Windows 7",
          "platform":"Microsoft Windows",
          "source":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79..."
        }
     * @return Object
     */
    static  getUserAgentForClient() {
        return useragent.parse(navigator.userAgent);
    }

    getMethod() {
        return this.request.method
    }

    getHeaders() {
        return this.request.headers
    }

    isGet() {
        return (this.request.method === 'GET')
    }

    isPost() {
        return (this.request.method === 'POST')
    }

    isPut() {
        return (this.request.method === 'PUT')
    }

    isDelete() {
        return (this.request.method === 'DELETE')
    }

    isJson() {
        const contentType = this.request.headers['content-type'];
        return _.startsWith(_.trim(contentType), 'application/json');
    }

    isXml() {
        const contentType = this.request.headers['content-type'];
        return _.startsWith(_.trim(contentType), 'application/xml');
    }

    isHtml() {
        const contentType = this.request.headers['content-type'];
        return _.startsWith(_.trim(contentType), 'text/html');
    }

    isForm() {
        const contentType = this.request.headers['content-type'];
        return _.startsWith(_.trim(contentType), 'application/x-www-form-urlencoded');
    }

    isAjax() {
        const requestType = this.request.headers['HTTP_X_REQUESTED_WITH'];
        return _.startsWith(_.trim(requestType), 'XMLHttpRequest');
    }

    isClient() {
        return this.context.isClient;
    }

    isServerHost() {
        return this.context.isServer && this.request;
    }

    isServerStatic() {
        return this.context.isServer && !this.request;
    }

    /**
     * Get request data
     *
     * @return Promise
     */
    getRequestData() {
        const self = this;
        //----------------------------
        return new Promise((resolve, reject) => {
            let body = '';
            let postData = {};
            // -------------------------------------
            self.request.on('data', function (data) {
                body += data;

                // Too much POST data, kill the connection!
                // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
                if (body.length > 1e6) {
                    // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                    self.request.connection.destroy()
                    reject('Http Error: Too much GET data.');
                }
            });

            self.request.on('end', function () {
                if (self.isJson()) {
                    postData = JSON.parse(body);
                } else {
                    postData = qs.parse(body);
                }
                resolve(postData)
            })
        })
    }

    /**
     * Get UserAgent info for server
     * {
          "isMobile":false,
          "isDesktop":true,
          "isBot":false,
          "isIE":false,
          "isChrome":true,
          .....
          "browser":"Chrome",
          "version":"17.0.963.79",
          "os":"Windows 7",
          "platform":"Microsoft Windows",
          "source":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79..."
        }
     * @return Object
     */
    getUserAgent() {
        return useragent.parse(this.request.headers['user-agent']);
    }


}


export default HttpBox
