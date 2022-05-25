name: pushkin
awsName: pushkin0fe5a546-6177-46aa-a314-36b3c7018e92
iam: default
dbs:
  - pushkinTransaction
  - pushkinMain
loadBalancerName: pushkinBalancer
targGroupARN: >-
  arn:aws:elasticloadbalancing:us-east-1:836033224544:targetgroup/pushkinBalancerTargets/a491684db2e08563
cloudFrontId: EYNK5LQQ5IECG
ECSName: pushkin
