import ReactMarkdown from "react-markdown";

interface BlogContentProps {
  content: string;
}

export function BlogContent({
  content,
}: BlogContentProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1
              className="
              mb-8
              mt-16
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              text-[var(--warm-ivory)]
              md:text-6xl
              "
            >
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2
              className="
              mb-6
              mt-20
              font-[var(--font-cormorant)]
              text-4xl
              font-light
              text-[var(--warm-ivory)]
              md:text-5xl
              "
            >
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3
              className="
              mb-5
              mt-14
              font-[var(--font-cormorant)]
              text-3xl
              font-light
              text-[var(--warm-ivory)]
              "
            >
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p
              className="
              mb-8
              text-xl
              leading-loose
              text-[var(--warm-grey)]
              "
            >
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul
              className="
              mb-8
              ml-8
              list-disc
              space-y-3
              text-xl
              text-[var(--warm-grey)]
              "
            >
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol
              className="
              mb-8
              ml-8
              list-decimal
              space-y-3
              text-xl
              text-[var(--warm-grey)]
              "
            >
              {children}
            </ol>
          ),

          blockquote: ({ children }) => (
            <blockquote
              className="
              my-12
              border-l-4
              border-[var(--accent)]
              pl-6
              text-xl
              italic
              text-[var(--warm-grey)]
              "
            >
              {children}
            </blockquote>
          ),

          strong: ({ children }) => (
            <strong
              className="
              font-semibold
              text-[var(--warm-ivory)]
              "
            >
              {children}
            </strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}