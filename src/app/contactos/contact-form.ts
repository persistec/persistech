export type ContactErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export type ContactState = {
  status: "idle" | "success" | "error";
  errors: ContactErrors;
  /** Top-level feedback for problems with the submission pipeline itself. */
  message?: string;
};

export const initialContactState: ContactState = {
  status: "idle",
  errors: {},
};
