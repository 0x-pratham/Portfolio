import ReactMarkdown from "react-markdown";

interface BlogContentProps {
  content: string;
}

export function BlogContent({
  content,
}: BlogContentProps) {
  return (
    <div className="mx-auto max-w-3xl">
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

          h2: ({ children }) => {
            const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, "-") || "";
            return (
              <h2
                id={id}
                className="
                group
                relative
                mb-6
                mt-20
                font-[var(--font-cormorant)]
                text-4xl
                font-light
                text-[var(--warm-ivory)]
                md:text-5xl
                "
              >
                <a
                  href={`#${id}`}
                  className="
                  absolute
                  -left-6
                  top-1/2
                  -translate-y-1/2
                  text-[var(--accent)]
                  opacity-0
                  transition-opacity
                  duration-200
                  group-hover:opacity-100
                  "
                >
                  #
                </a>
                {children}
              </h2>
            );
          },

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
              text-lg
              md:text-xl
              leading-loose
              text-[var(--warm-grey)]
              "
            >
              {children}
            </p>
          ),

          a: ({ children, href }) => (
            <a
              href={href}
              className="
              text-[var(--accent)]
              underline
              underline-offset-4
              transition-opacity
              hover:opacity-80
              "
            >
              {children}
            </a>
          ),

          ul: ({ children }) => (
            <ul
              className="
              mb-8
              ml-8
              list-disc
              space-y-3
              text-lg
              md:text-xl
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
              text-lg
              md:text-xl
              text-[var(--warm-grey)]
              "
            >
              {children}
            </ol>
          ),

          blockquote: ({ children }) => (
            <blockquote
              className="
              relative
              my-12
              border-l-4
              border-[var(--accent)]
              rounded-r-2xl
              bg-[var(--surface)]
              py-6
              pl-6
              pr-6
              text-lg
              md:text-xl
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

          pre: ({ children }) => (
            <pre className="my-8 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-sm leading-relaxed text-[var(--warm-grey)]">
              {children}
            </pre>
          ),

          code: ({ children }) => (
            <code className="rounded border border-[var(--border)] bg-[var(--surface)] px-1.5 py-0.5 font-mono text-sm text-[var(--accent)]">
              {children}
            </code>
          ),

          table: ({ children }) => (
            <div className="my-8 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <table className="w-full text-left text-sm border-collapse">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="border-b border-[var(--border)] bg-black/20 text-[var(--warm-ivory)] font-medium">
              {children}
            </thead>
          ),

          tbody: ({ children }) => (
            <tbody className="divide-y divide-[var(--border)] text-[var(--warm-grey)]">
              {children}
            </tbody>
          ),

          tr: ({ children }) => (
            <tr className="transition-colors hover:bg-white/[0.02]">
              {children}
            </tr>
          ),

          th: ({ children }) => (
            <th className="px-6 py-4 font-semibold border-b border-[var(--border)]">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="px-6 py-4">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}