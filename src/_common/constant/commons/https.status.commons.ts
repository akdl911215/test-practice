import { HttpStatus } from '@nestjs/common';

// 2xx Success Codes
export const TWO_HUNDRED: number = HttpStatus.OK; // 200: 요청 성공
export const TWO_HUNDRED_ONE_CREATED: number = HttpStatus.CREATED; // 201: 리소스 생성 성공
export const TWO_HUNDRED_TWO_ACCEPTED: number = HttpStatus.ACCEPTED; // 202: 요청이 접수되었으나 아직 처리되지 않음
export const TWO_HUNDRED_FOUR_NO_CONTENT: number = HttpStatus.NO_CONTENT; // 204: 요청 성공, 하지만 반환할 콘텐츠가 없음

// 3xx Redirection Codes
export const THREE_HUNDRED_ONE_MOVED_PERMANENTLY: number =
  HttpStatus.MOVED_PERMANENTLY; // 301: 리소스가 다른 URL로 영구적으로 이동함
export const THREE_HUNDRED_TWO_FOUND: number = HttpStatus.FOUND; // 302: 리소스가 다른 URL에 일시적으로 위치함
export const THREE_HUNDRED_THREE_SEE_OTHER: number = HttpStatus.SEE_OTHER; // 303: 클라이언트가 다른 URL을 참조하도록 리다이렉트

// 4xx Client Error Codes
export const FOUR_HUNDRED_BAD_REQUEST: number = HttpStatus.BAD_REQUEST; // 400: 잘못된 요청
export const FOUR_HUNDRED_ONE_UNAUTHORIZED: number = HttpStatus.UNAUTHORIZED; // 401: 인증되지 않음
export const FOUR_HUNDRED_THREE_FORBIDDEN: number = HttpStatus.FORBIDDEN; // 403: 권한이 없음
export const FOUR_HUNDRED_FOUR_NOT_FOUND: number = HttpStatus.NOT_FOUND; // 404: 리소스를 찾을 수 없음
export const FOUR_HUNDRED_NINE_CONFLICT: number = HttpStatus.CONFLICT; // 409: 요청 충돌 (중복 등)

// 5xx Server Error Codes
export const FIVE_HUNDRED_INTERNAL_SERVER_ERROR: number =
  HttpStatus.INTERNAL_SERVER_ERROR; // 500: 서버 내부 오류
export const FIVE_HUNDRED_ONE_NOT_IMPLEMENTED: number =
  HttpStatus.NOT_IMPLEMENTED; // 501: 기능이 구현되지 않음
export const FIVE_HUNDRED_THREE_SERVICE_UNAVAILABLE: number =
  HttpStatus.SERVICE_UNAVAILABLE; // 503: 서비스 사용 불가
