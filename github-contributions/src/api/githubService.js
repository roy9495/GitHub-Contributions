import axios from "axios";

const GITHUB_USERNAME = "roy9495"; // Change to your GitHub username

export const fetchContributions = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=type:pr+author:${GITHUB_USERNAME}`
    );

    console.log("GitHub Pull Requests:", response.data.items); // Log the pull requests

    // Filter out pull requests on repositories starting with "roy9495"
    const filteredPRs = response.data.items.filter((pr) => {
      const repoName = pr.repository_url.split("/").slice(-2).join("/");
      return !repoName.startsWith("roy9495");
    });

    console.log("Filtered Pull Requests:", filteredPRs); // Log the filtered pull requests

    return filteredPRs.map((pr) => ({
      id: pr.id,
      title: pr.title,
      repo: pr.repository_url.split("/").slice(-2).join("/"),
      date: new Date(pr.created_at).toLocaleDateString(),
      url: pr.html_url,
    }));
  } catch (error) {
    console.error("Error fetching GitHub pull requests", error);
    return [];
  }
};
