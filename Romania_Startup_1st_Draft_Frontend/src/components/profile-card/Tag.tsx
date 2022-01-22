import ITag from "../../types/interface/Tag";

export const Tag = ({ title }: ITag) => {
  return (
    <div className="mt-3 mr-2.5 text-base rounded-full bg-gray-200 px-5 py-2">
      {title}
    </div>
  );
};
