import os

class Config(object):
  DEBUG = False
  TESTING = False
  DATABASE_URI = 'sqlite:///:memory:'

class ProductionConfig(Config):
  SERVER_NAME = '0.0.0.0:8080'
  DATABASE_URI = 'mysql://user@localhost/foo'

class DevelopmentConfig(Config):
  DEBUG = True
  DEVELOPMENT = True
  SERVER_NAME = '0.0.0.0:3001'

class TestingConfig(Config):
  # TESTING = os.environ.get('TESTING')
  # TESTING = os.environ.get('TESTING')
  # DEBUG = os.environ.get('DEBUG')
  DEBUG = True
  DEVELOPMENT = True
