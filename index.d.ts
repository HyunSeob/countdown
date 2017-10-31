declare module '@hyunseob/countdown' {
  /**
   * Render countdown string in the `element`, from the `future` and repeat rendering every 1 second.
   */
  export default function showCountdown(
    element: HTMLElement,
    future: Date
  ): void;
}
