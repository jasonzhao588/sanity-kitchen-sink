export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f43c5a3fa790781ea4c3fac',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-913icyjc',
                  apiId: 'ca7eec36-16c2-4832-abdb-ebfd4e953bed'
                },
                {
                  buildHookId: '5f43c5a385f65ad93b896396',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5hyiev53',
                  apiId: 'dc32476b-034b-47e6-bc3f-5aacf3194e89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasonzhao588/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5hyiev53.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
