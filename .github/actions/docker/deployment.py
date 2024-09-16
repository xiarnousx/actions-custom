import os

def run():
  print ("HELLO WORLD!")
  print(os.environ['INPUT_BUCKET'])
  print(os.environ['INPUT_BUCKET-REGION'])
  print(os.environ['INPUT_BUILD-FOLDER'])
  url = f'http://{os.environ['INPUT_BUCKET']}.s3-website-{os.environ['INPUT_REGION']}.amazonaws.com'
  print(f'::set-output name=url::{url}')

if __name__ == '__main__':
  run()