import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col ">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post </span>{" "}
      </h1>
      <p>
        {type} and share amazing prompts with the world ,and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        className="w-full max-w-2xl flex flex-col glassmorphism  mt-10 "
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base pt-2 text-gray-700 ">
            Your AI prompt
          </span>
          <textarea
            name="pr"
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
            placeholder="Write your prompt here...."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label htmlFor="" className="pt-2">
          <span className="font-satoshi font-semibold text-base text-gray-700 ">
            Tag {"  "}
            <span className="font-normal text-gray-500 text-[13px]">
              (#product , #webdevelopment , #idea )
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            placeholder="# Tag"
            required
            className="form_input"
          />
        </label>
        <label htmlFor="">
          <div className="flex-end mx-3 mb-5 gap-4  mt-5">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>
            <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
              {submitting ?  `${type}...` : type}
            </button>
          </div>
        </label>
      </form>
    </section>
  );
};

export default Form;
