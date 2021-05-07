import React from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { toggleTheme } from "../slices/themeSlice";

/**
 * Home Page
 *
 * @goal
 * @keywords
 */

const IndexPage = () => {
  const { mode } = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();

  return (
    <Layout seo={{ title: "Home Page SEO" }}>
      <h1>Redux</h1>
      <p>Theme is: {mode}</p>
      <button aria-label="toggle theme mode" onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </Layout>
  );
};

export default IndexPage;
