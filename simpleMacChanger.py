import subprocess
import optparse
print("# #  #   ##  ## # #  #  ###  ## ### ##")
print("### # # #   #   # # # # # # #   #   # # ")
print("### ### #   #   ### ### # # # # ##  ## ")
print("# # # # #   #   # # # # # # # # #   # #")
print("# # # #  ##  ## # # # # # #  ## ### # #")

parser = optparse.OptionParser()
parser.add_option("-i", "--interface", dest="interface", help="Interface to change its mac address")

parser.add_option("-m", "--mac", dest="newmac", help="New Mac Address")
parser.parse_args()
interface = input("Enter The interface name which you want to change its Mac Address\n>")

newmac = input("Enter The New Mac Address\n>")
print("[+]Changing The Mac Address of " + interface + " to " + newmac)

subprocess.call("ifconfig " + interface + " down", shell=True)
subprocess.call("ifconfig " + interface + " hw ether" + newmac, shell=True)
subprocess.call("ifconfig " + interface + " up", shell=True)

