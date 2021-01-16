import json
import boto3
import uuid

client = boto3.client('polly')
s3_client = boto3.client('s3')
bucket_name = "ranjith-polly-mp3"

def speak(event, context):
    print(event)
    body = event['body']
    event = json.loads(body)
    print(type(event))
    text = event["text"]
    voiceId = event["voice"]
    response = client.synthesize_speech(
        Text = text,
        VoiceId = voiceId,
        OutputFormat = 'mp3'
    )
    id = str(uuid.uuid1())
    s3_client.put_object(Bucket = bucket_name, Key = id + ".mp3", Body = response["AudioStream"].read())
    url = s3_client.generate_presigned_url(
        ClientMethod='get_object',
        Params={
            'Bucket': bucket_name,
            'Key': id + ".mp3"
        }
    )
    print(url)
    result = {
        "bucket" : bucket_name,
        "key" : id + ".mp3",
        "url" : url
    }
    
    return {
        'statusCode': 200,
        'headers' : {
          "Access-Control-Allow-Origin" : "*"
        },
        'body': json.dumps(result)
    }
