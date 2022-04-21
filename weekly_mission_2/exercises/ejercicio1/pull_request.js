const pull_request = {
    title: "El PR",
    branchName: "main",
    status: "Active",
    author: 'Josue Avelar',
    dateCreated: '17-04-2022',
    repositoryNameAssciated: 'playbook',
    getTitleAndAuthor: function(){
      return this.title +' '+this.author
    },
    getStatus: function(){
      return this.status
    }
   }
   
   console.log("Nombre del Issue:" + issue.name)
   console.log("Issues totales: " + repo.getTitleAndAuthor())
   console.log(repo.getGeneralInfo())