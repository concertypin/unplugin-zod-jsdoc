/**
 * Phone number
 * @title Phone
 * @id PhoneNumber
 * @example +49157
 */
export const PhoneNumber = z.string().optional().meta({ cms: { widget: "phone" } });

const Obj = z.object({
  /**
   * Disabled tag next to an explicit key
   * @title JSDoc title
   */
  explicit: z.string().meta({ title: "Explicit title" }),

  /**
   * Only disabled tags are missing
   * @title JSDoc title
   * @example abc
   */
  complete: z.string().meta({ description: "Explicit", cms: 1 }),

  /** @title Nothing left to merge */
  titleOnly: z.string().meta({ cms: 1 }),

  /**
   * Only disabled tags besides the description
   * @title JSDoc title
   */
  described: z.string().describe("Explicit"),

  /**
   * Enabled and disabled tags
   * @title JSDoc title
   * @id described_id
   */
  describedWithId: z.string().describe("Explicit"),

  /**
   * Factory with meta
   * @title Kind
   * @id Kind
   */
  kind: wellKnownString(KINDS).meta({ cms: 1 }),

  /**
   * Bare factory
   * @title Bare
   * @example open
   */
  bare: wellKnownString(KINDS),
});

// --- result ---

/**
 * Phone number
 * @title Phone
 * @id PhoneNumber
 * @example +49157
 */
export const PhoneNumber = z.string().optional().meta({ description: "Phone number", id: "PhoneNumber", cms: { widget: "phone" } });

const Obj = z.object({
  /**
   * Disabled tag next to an explicit key
   * @title JSDoc title
   */
  explicit: z.string().meta({ description: "Disabled tag next to an explicit key", title: "Explicit title" }),

  /**
   * Only disabled tags are missing
   * @title JSDoc title
   * @example abc
   */
  complete: z.string().meta({ description: "Explicit", cms: 1 }),

  /** @title Nothing left to merge */
  titleOnly: z.string().meta({ cms: 1 }),

  /**
   * Only disabled tags besides the description
   * @title JSDoc title
   */
  described: z.string().describe("Explicit"),

  /**
   * Enabled and disabled tags
   * @title JSDoc title
   * @id described_id
   */
  describedWithId: z.string().describe("Explicit").meta({ id: "described_id" }),

  /**
   * Factory with meta
   * @title Kind
   * @id Kind
   */
  kind: wellKnownString(KINDS).meta({ description: "Factory with meta", id: "Kind", cms: 1 }),

  /**
   * Bare factory
   * @title Bare
   * @example open
   */
  bare: wellKnownString(KINDS).meta({ description: "Bare factory" }),
});
