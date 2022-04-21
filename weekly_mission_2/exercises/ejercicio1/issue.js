const issue = {
    title: "Las tareas",
    repositoryNameAssociated: "playbook",
    status: "Active",
    numberOfComments: 0,
    labels: ['JavaScript', 'Coding', 'LaunchX'],
    author: 'Josue Avelar',
    dateCreated: '17-04-2022',
    lastUpdated: '17-04-2022',
    getTitleAndAuthor: function(){
      return this.title +' '+this.author
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del Issue:" + issue.name)
   console.log("Issues totales: " + repo.getTitleAndAuthor())
   console.log(repo.getGeneralInfo())