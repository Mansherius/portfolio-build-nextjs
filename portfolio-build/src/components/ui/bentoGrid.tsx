import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import IconCloud from "./IconCloud";
import { slugs } from "../../../data/index";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-6 gap-4 lg:gap-8 mx-auto p-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  descriptionTop,
  descriptionBottom,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  descriptionTop?: string | React.ReactNode;
  descriptionBottom?: string | React.ReactNode;
  header?: React.ReactNode;
  id: number;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 border border-teal-500/[0.5] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'linear-gradient(153deg, rgba(4,9,30,1) 34%, rgba(26,18,98,1) 76%)',
      }}
    >
      <div className={`${id === 6} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute" id='Image'>
          {img && (
            <img
              src={img}
              alt="bento Image"
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`} id="spareImg">
          {spareImg && (
            <img
              src={spareImg}
              alt="bento Image"
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}

          <div className={cn(
            titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>
            {id === 1 && (
            <div className="sm:w-[30%] md:w-[60%] pb-2">
              <IconCloud iconSlugs={slugs} />
            </div>
          )}
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {descriptionTop}
            </div>
            <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
              {title}
            </div>
            {descriptionBottom && (
              <div className="font-sans font-normal text-[#ffffff] text-sm md:text-xs lg:text-base z-10 py-8">
                {descriptionBottom}
              </div>
            )}
            {id === 1 && (
              <div className="flex w-fit gap-2 absolute -right-3 lg:-right-1">
                <div className="flex flex-col gap-3 lg:gap-8">
                  {["React", "Next.js", "TailwindCSS", "TypeScript", "Scala", "C"].map((tech) => (
                    <span className="py-2 lg:py-4 lg:px-3 px-3 text-xs font-bold lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {tech}
                    </span>
                  ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                </div>
                <div className="flex flex-col gap-3 lg:gap-8">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                  {["Flutter", "Node.js", "PyTorch", "TensorFlow", "Python", "MongoDB"].map((tech) => (
                    <span className="py-2 lg:py-4 lg:px-3 px-3 text-xs font-bold lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
      </div>
    </div>
  );
};
