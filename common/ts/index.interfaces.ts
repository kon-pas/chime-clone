import type {
  Email,
  Password,
  FirstName,
  SecondName,
  HttpResponseStatusCode,
  HttpResponseStatusMessage,
} from "@types";

/**
 * Interface for two-level navigation item
 */
export interface NavigationItem {
  readonly label: string;
  readonly path?: string;
  readonly subitems: {
    readonly label: string;
    readonly path?: string;
  }[];
}

/**
 * Contains props for creating Next Image
 */
export interface NextImageProps {
  readonly src: `https://www.chime.com/${string}` | `/static/${string}`;
  readonly alt: string;
  readonly originalSize: [number, number];
  readonly width?: {
    readonly sm?: number;
    readonly md?: number;
    readonly lg?: number;
  };
}

export interface SafeUser {
  email: Email;
  firstName: FirstName;
  secondName: SecondName;
}

export interface FullUser extends SafeUser {
  password: Password;
}

export interface HttpResponseStatus {
  readonly code: HttpResponseStatusCode;
  readonly message: HttpResponseStatusMessage;
}
