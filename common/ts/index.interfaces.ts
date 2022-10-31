import type { Email, Password, Username } from "@types";

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
 * Contains props for creating Next's Image
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

export interface FullUser {
  email: Email;
  password: Password;
  username: Username;
}

export interface HttpResponseStatus {
  readonly code: number;
  readonly message: string;
}
