const fs = require('fs');
            const path = require('path');
            const release_id = '${{ needs.create_release.outputs.id }}';

            const upload = async (filePath) => {
              console.log('%c [ filePath ]-94', 'font-size:13px; background:pink; color:#bf2c9f;', filePath);
              const stat = fs.statSync(filePath)

              if(stat.isDirectory()){
                // 文件夹
                const dirs = fs.readdirSync(filePath)
                console.log('%c [ dirs ]-99', 'font-size:13px; background:pink; color:#bf2c9f;', dirs);
                for (let dir of dirs) {
                  await upload(path.join(filePath, dir))
                }
              } else if (stat.isFile()) {
                // 文件 - 上传
                console.log('uploadReleaseAsset');
               
              }
            }

            upload('./lede/bin/targets')