


const fs = require('fs');
const path = require('path');

const { repo: { owner, repo }, sha } = context;
console.log({ owner, repo, sha });

const release = await github.repos.createRelease({
  owner, repo,
  draft: true,
  target_commitish: sha,
  tag_name: process.env.GITHUB_REF,
});

  for (let file of await fs.readdirSync('./openWrt/bin/targets/bcm27xx/bcm2711')) {
  console.log('%c [ file ]-108', 'font-size:13px; background:pink; color:#bf2c9f;', file);
  const filePath = `./openWrt/bin/targets/bcm27xx/bcm2711/${file}`

  if (/\.img\.gz$/.test(file)) {
    console.log('%c [ file ]-122', 'font-size:13px; background:pink; color:#bf2c9f;', file);

    await github.repos.uploadReleaseAsset({
      repo,
      owner, 
      name: file,
      release_id: release.data.id,
      data: await fs.readFileSync(filePath)
    }); 
  }
}