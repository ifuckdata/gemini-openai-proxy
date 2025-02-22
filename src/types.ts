// deno-lint-ignore-file no-namespace
import { components } from "./openai-types.ts"

export namespace OpenAI {
  export namespace Chat {
    export type ChatCompletionCreateParams =
      components["schemas"]["CreateChatCompletionRequest"]
    export type ChatCompletionChunk =
      components["schemas"]["CreateChatCompletionStreamResponse"]
    export type ChatCompletion =
      components["schemas"]["CreateChatCompletionResponse"]
    export type ChatCompletionMessageParam =
      components["schemas"]["ChatCompletionRequestMessage"]
  }
  export namespace Models {
    export type Model = components["schemas"]["Model"]
  }
}

// export type { OpenAI } from "https://deno.land/x/openai@v4.28.0/mod.ts"
