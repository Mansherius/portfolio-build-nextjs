"use client";

import { cn } from "@/utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "sm:text-4xl md:text-5xl tracking-wider",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-green-4",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
  }: {
    words: {
      text: string;
      className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
  }) => {
    // Split text inside of words into an array of characters
    const wordsArray = words.map((word) => {
      return {
        ...word,
        text: word.text.split(''),
      };
    });
  
    const renderWords = () => {
      return (
        <div>
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={cn(word.className)}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          ))}
        </div>
      );
    };
  
    return (
      <div className={cn('flex items-center space-x-1 my-6', className)}>
        <motion.div
          className="overflow-hidden"
          initial={{ width: '0%' }}
          whileInView={{ width: 'fit-content' }}
          transition={{ duration: 2, ease: 'linear', delay: 0 }}
        >
          <div
            className={cn(
              'text-4xl md:text-5xl tracking-wider font-bold',
              className // Ensuring the default sizing is applied
            )}
            style={{ whiteSpace: 'nowrap' }}
          >
            {renderWords()}
          </div>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className={cn(
            // Adjusting cursor size to match text height
            'inline-block w-[4px] h-12 bg-green-4',
            cursorClassName
          )}
        ></motion.span>
      </div>
    );
  };